import React from "react"
import { Helmet } from 'react-helmet'
import PerfilComp from '../../components/Perfil'

export default function Perfil() {
  return (
    <>
      <Helmet><title>Perfil</title></Helmet>
      <PerfilComp />
    </>
  );
}
