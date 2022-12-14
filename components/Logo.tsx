import Image from 'next/image'
import React from 'react'

function Logo(props: any) {
    const { renderDefault, title } = props
    return (
        <div className='flex items-center'>
            <Image className='rounded-full object-cover' width={100} height={100} src="https://www.logo.wine/a/logo/Beyond_Meat/Beyond_Meat-Icon-Logo.wine.svg" alt="logo" />
            {renderDefault && <>{renderDefault(props)}</>}
        </div>
    )
}

export default Logo