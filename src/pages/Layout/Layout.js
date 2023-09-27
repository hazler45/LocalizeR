import React from 'react'
import { NavMenu } from '../../components/NavBar/NavMenu';
import Card from '../../components/Card/Card';
export default function Layout() {
  return (
    <>
    <div className='m-8'>
    <NavMenu/>
    </div>
    <Card/>
    </>
  )
}
