import Image from 'next/image'
import Link from 'next/link'
import blacklogo from '@public/black_logo.png'
import React, { useEffect } from 'react'
import { useOrg } from '../Contexts/OrgContext'

function Watermark() {
    const org = useOrg() as any

    useEffect(() => {
    }
        , [org]);

    return null
}

export default Watermark