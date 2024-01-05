"use client";
import React from "react";
import Input from "../components/Input";
import Link from "next/link";

const Register: React.FC = () => {
  return (
    <main className="bg-blue-500 flex justify-center items-center min-h-screen flex-col">
      <div className="bg-blue-400 py-6 w-1/4 h-1/3 flex justify-center items-center flex-col rounded-lg">
        <h1 className="text-white text-3xl mb-5">Cadastro</h1>
        <form className="flex flex-col">
          <Input
            textInput="email@email.com"
            textLabel="E-mail"
            typeInput="email"
          />
          <Input
            textInput="Digite a senha"
            textLabel="Senha"
            typeInput="password"
          />

          <Input
            textInput="Digite a senha anterior"
            textLabel="Repita a senha"
            typeInput="password"
          />
          <button className="text-white mt-2">Cadastrar</button>
        </form>
        <Link href="/login" className="text-white text-xs mt-4">
          Voltar para o login
        </Link>
      </div>
    </main>
  );
};

export default Register;