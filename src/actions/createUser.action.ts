"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

// server action

export default async function createUser(_: unknown, formData: FormData) {
  
  const email = (formData.get("email") ?? "").toString().trim();
  const password = (formData.get("password") ?? "").toString();

  if (!email || !password) throw new Error("이메일과 비밀번호를 입력해주세요.");

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, name: password }),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("회원가입 실패");
  }

  // alert('회원가입 완료');
  // redirect('/login')

  // revalidate

  // PURGE
  // revalidatePath(`/photos/${id}`)

  // revalidatePath('/photos/[id]','page')

  // revalidatePath('/(top-badge-layout)','layout')

  // revalidatePath('/','layout')

  // revalidateTag('tagName')
}
