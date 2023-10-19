import { forwardRef, useEffect, useRef, useState } from "react";

export default function useRefHook() {
  // The useRef Hook allows you to persist values between renders.
  const numRef = useRef<number>();
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [state, setState] = useState(0);

  useEffect(() => {
    if (numRef.current !== 1) {
      numRef.current = state;
    }
  }, [state]);

  const focusTextArea = () => {
    textAreaRef.current?.focus();
    textAreaRef.current?.select();
  };

  const focusInput = () => {
    inputRef.current?.focus();
    inputRef.current?.select();
  };

  return (
    <div className="p-3 w-full">
      <button onClick={() => setState((c) => c + 1)}>click!</button>
      <p>{state}</p>

      <hr />
      <br />
      <textarea
        placeholder="text arae"
        className="border"
        ref={textAreaRef}
      ></textarea>
      <br />
      <button onClick={() => focusTextArea()}>focus</button>

      <br />
      <br />
      <TextInput ref={inputRef} />
      <button onClick={() => focusInput()}>focus</button>
      <br />
    </div>
  );
}

type InputProps = React.HTMLProps<HTMLInputElement>;

const TextInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <>
      <input ref={ref} placeholder="text input" />
      <br />
    </>
  );
});
