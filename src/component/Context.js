import { createContext } from "react";

const Usecontext=createContext()

const UserProvider=Usecontext.Provider
const UserConsumer=Usecontext.Consumer

const Idcontext=createContext()

const Idprovider=Idcontext.Provider
const Idconsumer=Idcontext.Consumer

export {UserConsumer,UserProvider,Idconsumer,Idprovider}