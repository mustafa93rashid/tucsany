import React from 'react'
import { PackagesData } from '@/data/PackagesData'
import PackageCard from '@/components/PackageCard'
import Title from '@/components/Title'



const Package = () => {

    return (
        <section className="max-w-[1800px] mx-auto">

            <div className='px-[4.1025641%] lg:px-[5.55555556%] xl:px-[13.0208333%] pt-[120px] '>
                <Title title="The Most Popular Packages" />
                <div className='flex flex-col lg:flex-row gap-5 '>
                    {PackagesData.map((pkg, index) => (
                        <PackageCard
                            key={index}
                            image={pkg.images}
                            title={pkg.title}
                            price={pkg.price}
                            features={pkg.features}
                        />
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Package