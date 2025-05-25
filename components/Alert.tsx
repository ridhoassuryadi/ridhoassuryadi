interface IAlertProps {
  text?: string;
}

export default function Alert({ text }: IAlertProps) {
  return (
    <>
      <div className="w-full rounded-md border border-main-30 bg-main-10 px-4 py-3">
        <p className="text-sm text-main">{text}</p>
      </div>
    </>
  );
}
