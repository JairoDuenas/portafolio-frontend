import React from 'react'

export default function PdfPage() {
  return (
    <div className='doc-cv'
      position='absolute'
      width='100%'
      height='100%'
    >
      <object
        data={(require('../../docs/cv_dev_Jhon_Jairo_Dueñas_Vega-09-2022.pdf'))}
        type="application/pdf"
        width='100%'
        height='100%'
      >
        </object>
      pdf
    </div>
  )
}
