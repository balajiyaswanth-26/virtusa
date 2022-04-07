import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import ProductComponent from '../components/ProductComponent'

export default function Home() {
  return (
    <div>
        <Layout
    title='WELCOME HOME'
    className='container-fluid'
    >
        <div className='row'> 
        <Link to='/shop' style={{textDecoration:'none',color:'inherit'}}><ProductComponent /></Link>
        <Link to='/shop' style={{textDecoration:'none',color:'inherit'}}><ProductComponent /></Link>
        <Link to='/shop' style={{textDecoration:'none',color:'inherit'}}><ProductComponent /></Link>
        <Link to='/shop' style={{textDecoration:'none',color:'inherit'}}><ProductComponent /></Link>
        <Link to='/shop' style={{textDecoration:'none',color:'inherit'}}><ProductComponent /></Link>
        <Link to='/shop' style={{textDecoration:'none',color:'inherit'}}><ProductComponent /></Link>
        <Link to='/shop' style={{textDecoration:'none',color:'inherit'}}><ProductComponent /></Link>
        <Link to='/shop' style={{textDecoration:'none',color:'inherit'}}><ProductComponent /></Link>
        <Link to='/shop' style={{textDecoration:'none',color:'inherit'}}><ProductComponent /></Link>
        <Link to='/shop' style={{textDecoration:'none',color:'inherit'}}><ProductComponent /></Link>
        <Link to='/shop' style={{textDecoration:'none',color:'inherit'}}><ProductComponent /></Link>
        <Link to='/shop' style={{textDecoration:'none',color:'inherit'}}><ProductComponent /></Link>
        
        </div>
        
    </Layout>
    
    </div>
  )
}
