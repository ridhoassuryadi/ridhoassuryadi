"use client";
import React from "react";
import DragElements from "@/shared/ui/base/drag-elements";

export const HowMeWorks = () => {
  return (
    <div className="w-full font-sans py-4">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-4 order-1">
            <div className="mb-8">
              <p className="text-xs text-base-600 mb-3 tracking-[0.2em] uppercase font-medium">WAIT A MINUTE</p>
              <h2 className="text-4xl lg:text-5xl font-luxurious text-base-900 mb-8 leading-tight">
                Who are you?
              </h2>
            </div>
            
            <div className="space-y-6 text-base text-base-700 leading-relaxed">
              <p>
                I'm a <strong>Computer Science & Engineering</strong> graduate, currently working as a <strong>Software</strong> 
                Graduate Intern at Intel. Over the years, I've had the chance to lead <strong>teams</strong> and work on 
                <strong>real</strong>-world projects that taught me how to build <strong>digital</strong> 
                experiences that <strong>matter</strong>. I focus on <strong>designing</strong> and developing <strong>user-centered</strong> 
                products that <strong>scale</strong> well. Through <strong>hands-on</strong> work, trial and error, and a lot of <strong>learning</strong> 
                along the way, I've come to see what separates <strong>good</strong> design from <strong>truly great</strong> 
                design.
              </p>
            </div>

            <div className="mt-10 p-4 bg-gray-soft rounded-lg border border-gray-200">
              <p className="text-sm text-base-700">
                What you just experienced is called <strong>BIONIC READING</strong>. 
                Learn more about it{" "}
                <a href="#" className="text-blue-600 underline hover:text-blue-700">here</a>.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm text-base-600">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                Pondicherry, In
              </div>
              <div className="flex items-center gap-3 text-sm text-base-600">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                Vellore Institute of Technology, Vellore, In
              </div>
              <div className="flex items-center gap-3 text-sm text-base-600">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                Bangalore, In
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div className="lg:col-span-4 order-3 lg:order-2 flex justify-center items-center">
            <div className="w-full h-80 relative flex justify-center items-center">
              <DragElements className="w-full h-full">
                <img 
                  src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=280&h=200&fit=crop&crop=center" 
                  alt="Architecture"
                  className="w-64 h-48 object-cover rounded-2xl shadow-xl select-none transform rotate-3"
                  draggable={false}
                />
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&h=120&fit=crop&crop=center" 
                  alt="Technology"
                  className="w-24 h-24 object-cover rounded-xl shadow-lg select-none"
                  draggable={false}
                />
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop&crop=center" 
                  alt="Collaboration"
                  className="w-24 h-24 object-cover rounded-lg shadow-md select-none"
                  draggable={false}
                />
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=80&h=80&fit=crop&crop=center" 
                  alt="Analytics"
                  className="w-24 h-24 object-cover rounded-lg shadow-md select-none"
                  draggable={false}
                />
              </DragElements>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-xs text-base-500 italic">Fav shot from my last trip</p>
                <p className="text-xs text-blue-600 font-medium">Mumbai</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 order-2 lg:order-3">
            <div className="mb-8">
              <p className="text-base text-base-700 leading-relaxed">
                My strength lies in <strong>bridging</strong> design and development. A skill I've sharpened 
                through <strong>hands-on</strong> freelancing as both a <strong>UI/UX</strong> 
                designer and <strong>front-end</strong> developer.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-base-900 mb-4">Cycle of my Creation</h3>
              <div className="bg-gray-soft p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-base-700 leading-relaxed font-mono">
                  Research it → Engineer it → Systemize it → Build it → Perfect it
                </p>
              </div>
              <p className="text-sm text-base-600 mt-4 leading-relaxed">
                It's not just about ideas; it's about <strong>shaping</strong> them 
                with <strong>discipline</strong> and bringing them to life with 
                <strong>creativity</strong>.
              </p>
            </div>

            <div className="mb-12">
              <p className="text-base text-base-700 leading-relaxed">
                Also, I was the <strong>Head of Design</strong> at IEEECS 
                Student Chapter for the term 23-24. I was 
                also part of the Design Team at Riviera 23, 
                the annual fest of VIT.
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm text-base-600 mb-3">find me at</p>
              <div className="flex justify-end gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 transition-colors"></div>
                <div className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 transition-colors"></div>
                <div className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 transition-colors"></div>
                <div className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 transition-colors"></div>
                <div className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 transition-colors"></div>
                <div className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 transition-colors"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};