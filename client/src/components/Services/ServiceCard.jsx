import React from 'react'

const ServiceCard = ({item, index}) => {
    const {name, desc, bgColor, textColor} = item;
  return (
    <div className='py-[50px]  lg:px-5'>
<h2 className='text-[30px] font-[700] text-headingColor text-center leading-8' style={{backgroundColor: bgColor, color: textColor}}>

</h2>
    </div>
  )
}

export default ServiceCard