import {
  ArrowPathIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  PauseIcon,
  PlayIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";

export interface Config {
  id: string;
  type: "image";
  name: string;
  path?: string;
  alt?: string;
}

export default function AudioWindow(props: Config) {
  const audio = useRef(new Audio(props.path));

  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [loop, setLoop] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!audio.current) return;

    audio.current.addEventListener("canplay", onCanPlay);
    audio.current.addEventListener("play", onPlay);
    audio.current.addEventListener("pause", onPause);

    return () => {
      audio.current.removeEventListener("canplay", onCanPlay);
      audio.current.removeEventListener("play", onPlay);
      audio.current.removeEventListener("pause", onPause);

      audio.current.pause();
      audio.current.src = "";
    };
  }, [audio]);

  useEffect(() => {
    if (loading) return;
    audio.current.volume = muted ? 0 : 1;
  }, [loading, muted]);

  useEffect(() => {
    if (loading) return;
    audio.current.loop = loop;
  }, [loading, loop]);

  function onCanPlay() {
    setLoading(false);
  }

  function onPlay() {
    setPlaying(true);
  }

  function onPause() {
    setPlaying(false);
  }

  function toggle() {
    if (playing) return audio.current.pause();
    audio.current.play();
  }

  function skip(seconds: number) {
    audio.current.currentTime += seconds;
  }

  return (
    <div className="flex h-full w-full items-center justify-center overflow-auto">
      <div className="flex w-full max-w-2xl flex-row items-center justify-evenly">
        <button
          onClick={() => setLoop(!loop)}
          className={`rounded-full p-3 transition-all hover:bg-text-10 ${loop ? "bg-text-20" : ""}`}
        >
          <ArrowPathIcon className="w-6" />
        </button>
        <button
          onClick={() => skip(-5)}
          className="rounded-full p-3 transition-all hover:bg-text-10"
        >
          <ChevronDoubleLeftIcon className="w-6" />
        </button>
        <button
          onClick={() => toggle()}
          className={`flex h-16 w-16 items-center justify-center rounded-full ${playing ? "bg-text-10" : "bg-text"}`}
        >
          {playing ? (
            <PauseIcon className="w-8 text-text" />
          ) : (
            <PlayIcon className="w-8 text-background" />
          )}
        </button>
        <button
          onClick={() => skip(5)}
          className="rounded-full p-3 transition-all hover:bg-text-10"
        >
          <ChevronDoubleRightIcon className="w-6" />
        </button>
        <button
          onClick={() => setMuted(!muted)}
          className={`rounded-full p-3 transition-all hover:bg-text-10 ${muted ? "bg-text-20" : ""}`}
        >
          {muted ? (
            <SpeakerXMarkIcon className="w-6" />
          ) : (
            <SpeakerWaveIcon className="w-6" />
          )}
        </button>
      </div>
    </div>
  );
}

export function Icon() {
  return (
    <img
      src="/apps/audio.svg"
      alt="Image Icon"
      draggable={false}
      className="h-full w-full drop-shadow"
    />
  );
}

export const config = {
  fullscreen: false,
  width: 400,
  height: 200,
};
