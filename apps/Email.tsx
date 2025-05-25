import { EnvelopeIcon } from "@heroicons/react/24/outline";

export interface Config {
  id: string;
  type: "email";
  name: string;
  email: string;
  subject?: string;
  fields?: {
    firstname?: boolean;
    lastname?: boolean;
    to?: boolean;
    subject?: boolean;
  };
  labels?: {
    from?: string;
    to?: string;
    firstname?: string;
    lastname?: string;
    subject?: string;
    body?: string;
    send?: string;
  };
  placeholders?: {
    from?: string;
    firstname?: string;
    lastname?: string;
    subject?: string;
    body?: string;
  };
}

export default function EmailWindow({
  email,
  subject,
  fields,
  labels,
  placeholders,
}: Config) {
  return (
    <div className="flex h-full w-full flex-col items-center overflow-auto p-8">
      <div className="mt-auto"></div>
      <form
        method="POST"
        action={`https://formsubmit.co/${email}`}
        className="flex w-full max-w-md flex-col space-y-4"
        target="_blank"
      >
        {(fields?.firstname || fields?.lastname) && (
          <div className="flex space-x-4">
            {fields?.firstname && (
              <Input
                name="firstname"
                label={labels?.firstname || "Firstname"}
                placeholder={placeholders?.firstname || "Firstname"}
                type="text"
              />
            )}
            {fields?.lastname && (
              <Input
                name="lastname"
                label={labels?.lastname || "Lastname"}
                placeholder={placeholders?.lastname || "Lastname"}
                type="text"
              />
            )}
          </div>
        )}
        {fields?.to !== false && (
          <Input
            name="to"
            label={labels?.to || "To"}
            placeholder=""
            value={email}
            type="email"
            disabled
          />
        )}
        <Input
          name="email"
          label={labels?.from || "From"}
          placeholder={placeholders?.from || "your.email@gmail.com"}
          type="email"
        />
        {fields?.subject !== false && (
          <Input
            name="subject"
            label={labels?.subject || "Subject"}
            placeholder={placeholders?.subject || "Questions about..."}
            type="text"
          />
        )}
        <Input
          name="body"
          label={labels?.body || "Message"}
          placeholder={placeholders?.body || "Hi, ..."}
          min={5}
          rows={4}
          type="textarea"
        />
        <button
          className="!mt-6 flex items-center justify-center space-x-4 rounded-lg bg-main px-6 py-3 font-medium text-background transition-all hover:opacity-80"
          type="submit"
        >
          <EnvelopeIcon className="mr-2 w-5" />
          {labels?.send || "Send Email"}
        </button>
        <input type="hidden" id="_template" value="box" />
        <input
          type="hidden"
          id="_subject"
          value={subject || "Contact request from Portfolio"}
        />
      </form>
      <div className="mb-auto"></div>
    </div>
  );
}

interface InputProps {
  name: string;
  type: "text" | "textarea" | "email";
  label: string;
  placeholder: string;
  value?: string;
  disabled?: boolean;
  rows?: number;
  min?: number;
}

function Input({
  name,
  type,
  label,
  rows,
  placeholder,
  value,
  disabled,
}: InputProps) {
  const As = type == "textarea" ? "textarea" : "input";

  return (
    <div className="flex w-full flex-col space-y-1">
      <label className="text-sm text-text-50" htmlFor={name}>
        {label}:
      </label>
      <As
        type={type}
        id={name}
        name={name}
        rows={rows}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        required
        className={`focus:!ring-none w-full rounded-lg border-text-20 bg-text-10 pr-12 !outline-0 focus:!outline-none ${
          type == "textarea" ? "min-h-16 resize-y" : ""
        }`}
      />
    </div>
  );
}

export function Icon() {
  return (
    <img
      src="/apps/email.svg"
      alt="Email Icon"
      draggable={false}
      className="h-full w-full drop-shadow"
    />
  );
}

export const config = {
  window: {
    width: 400,
    height: 550,
  },
};
