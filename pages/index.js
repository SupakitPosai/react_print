import Head from 'next/head'
import Pint from '../components/pint'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
       <Head>
        <title>React Pint</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link href="https://fonts.googleapis.com/css?family=Kanit:400,700|Montserrat:400,700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Sarabun:400,700&display=swap" rel="stylesheet"></link>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" rel="stylesheet"></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.15/dist/summernote.min.css" rel="stylesheet" />
        <link rel="stylesheet" href={'/css/bootstrap.css'}/>
        <link rel="stylesheet" href={'/css/style.css'}/>
      </Head>



      
      <Pint/>
    </div>
  )
}
