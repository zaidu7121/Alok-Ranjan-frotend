"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContact } from "@/lib/api";
const schema=z.object({name:z.string().min(2,"Please enter your name."),email:z.string().email("Enter a valid email address."),subject:z.string().min(3,"Please add a subject."),message:z.string().min(20,"Please provide at least 20 characters."),website:z.string().optional()});
type FormValues=z.infer<typeof schema>;
export function ContactForm() {
 const [state,setState]=useState<{kind:"idle"|"success"|"error";message:string}>({kind:"idle",message:""});
 const {register,handleSubmit,reset,formState:{errors,isSubmitting}}=useForm<FormValues>({resolver:zodResolver(schema),defaultValues:{website:""}});
 async function onSubmit(values:FormValues){setState({kind:"idle",message:""});try{const result=await submitContact(values);setState({kind:"success",message:result.message||"Thank you. Your message has been received."});reset();}catch(e){setState({kind:"error",message:e instanceof Error?e.message:"Something went wrong. Please try again."});}}
 return <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate><div className="grid gap-5 sm:grid-cols-2"><Field label="Name" error={errors.name?.message}><input {...register("name")} autoComplete="name"/></Field><Field label="Email" error={errors.email?.message}><input {...register("email")} type="email" autoComplete="email"/></Field></div><Field label="Subject" error={errors.subject?.message}><input {...register("subject")}/></Field><Field label="Message" error={errors.message?.message}><textarea {...register("message")} rows={6}/></Field><div className="hidden" aria-hidden="true"><label>Leave this field empty<input tabIndex={-1} autoComplete="off" {...register("website")}/></label></div>{state.message&&<p role="status" className={state.kind==="success"?"form-success":"form-error"}>{state.message}</p>}<button className="button-primary" disabled={isSubmitting}>{isSubmitting?"Sending…":"Send message"}</button><p className="text-xs leading-6 text-muted">Please do not include confidential, privileged or time-sensitive information in this form.</p></form>;
}
function Field({label,error,children}:{label:string;error?:string;children:React.ReactNode}){return <label className="form-field"><span>{label}</span>{children}{error&&<small role="alert">{error}</small>}</label>}
