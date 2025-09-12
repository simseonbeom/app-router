'use client'

import createUser from "@/actions/createUser.action";
import { useActionState } from "react";

function SubmitForm() {
  const [state, submitAction, isPending] = useActionState(createUser, null);

  
  return (
    <form action={submitAction}>
      <div>
        <label>
          이메일 :
          <input className="border-b m-2" type="email" name="email" />
        </label>
      </div>
      <div>
        <label>
          비밀번호 :
          <input className="border-b m-2" type="password" name="password" />
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-emerald-600 px-3 py-2 rounded mt-10 font-bold"
        disabled={isPending}
      >
        {isPending ? 'wait..' : '회원가입'}
      </button>
    </form>
  );
}
export default SubmitForm;
