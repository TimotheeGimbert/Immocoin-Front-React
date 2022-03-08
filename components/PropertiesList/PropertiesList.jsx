import React, { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import APIManager from "pages/api/axiosMethods";
import PropertyCard from "../PropertyCard/PropertyCard";
import { propertiesListWrapper } from './propertieslist.module.scss';
import Link from 'next/link';

const PropertiesList = ({ properties }) => {
  // const [fetchedProperties, setFetchedProperties] = useState("");

  // useEffect(() => {
  //   const getProperties = async () => {
  //     const response = await APIManager.getAllProperties();
  //     setFetchedProperties(response.data.properties);
  //   }
    
  //   getProperties()
  //   .catch(console.error);
  // }, [])


  // if (fetchedProperties.length === 0) {
  //   return (
  //     <>
  //       <div>
  //         <Oval
  //           height="100"
  //           width="100"
  //           color='hsl(212, 100%, 48%)'
  //           secondaryColor='#ddd'
  //           ariaLabel='loading'
  //         />
  //       </div>
  //       <p> Chargement des logements en cours... </p>
  //     </>
  //   );
  // }
  // else {
  // }
  // if (error) {
  //   return (
  //     {error}
  //   )
  // }

  // console.log(properties);

  return (
    <div className={propertiesListWrapper}>
      {properties.map(property => {
        const { title, description, price, id } = property.property;
        const picture = property.picture;

        return (
          <Link href={`/properties/${id}`} key={id}>
            <a><PropertyCard 
              title={title} 
              description={description} 
              picture={picture}
              price={price} 
            />
            </a>
          </Link>
        )
      })}
    </div>
  );
};

export default PropertiesList;
