import React from 'react'


import pdftest from "./pdf/pdf-test.pdf"

import AllPages from './pdf/AllPages'

const ViewPdf = () => {
    return (
        <div className="all-page-container">
            <AllPages pdf={pdftest} />
        </div>
    )
}

export default ViewPdf
