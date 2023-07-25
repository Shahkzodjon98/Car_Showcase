'use client'


import { CarProps } from '@/types'
import { generateCarImageUrl } from '@/utils';
import CustomButton from "./CustomButton";
import { useState } from "react";
import axios from "axios";


import { Dialog, Transition } from '@headlessui/react';

import Image from 'next/image';
import { Fragment } from 'react';

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  const [firstName, setFirstName] = useState('');
  const [tele, setTele] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const telegramBotToken = 'YOUR_TELEGRAM_BOT_TOKEN';
      const chatId = 'YOUR_CHAT_ID'; // Replace with the actual chat ID

      const text = `Ismingiz: ${firstName}\nTelefon: ${tele}`;

      await axios.post(
        `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
        {
          chat_id: chatId,
          text: text,
        }
      );

      alert('Xabar yuborildi');

      // Reset the form
      setFirstName('');
      setTele('');
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error);
    }
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className=" relative z-10" onClose={closeModal}>
          <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom='opacity-0'
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
          >
            <div className=' fixed inset-0 bg-black bg-opacity-25'/>
          </Transition.Child>

          <div className=" fixed inset-0 overflow-y-auto">
            <div className=" flex max-h-full items-center justify-center p-4 text-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom='opacity-0 scale-95'
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
          >
              <Dialog.Panel className=" relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white transform rounded-2xl text-left shadow-xl transition-all my-6 flex flex-col gap-5 p-8">
                  <button
                      type='button'
                      className='fixed sticky top-2 left-[100%]  z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                      onClick={closeModal}
                    >
                     <Image
                    src='/close.svg'
                    alt='close'
                    width={20}
                    height={20}
                    className='object-contain'
                  />
                </button>

                <div className="flex flex-1 flex-col gap-3">
                  <div className=" relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                  <Image src={generateCarImageUrl(car)} alt='car model' fill priority className='object-contain' />
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                    <Image src={generateCarImageUrl(car, '29')} alt='car model' fill priority className='object-contain' />
                    </div>
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                    <Image src={generateCarImageUrl(car, '33')} alt='car model' fill priority className='object-contain' />
                    </div>
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                    <Image src={generateCarImageUrl(car, '13')} alt='car model' fill priority className='object-contain' />
                    </div>
                  </div>
                </div>

                <div className=' flex-1 flex flex-col gap-2'>
                  <h2 className=" font-semibold text-xl capitalize">
                    {car.make} {car.model}
                  </h2>
                  <div className=" mt-3 flex flex-wrap gap-4">
                    {Object.entries(car).map(([key, value]) => (
                      <div className=" flex justify-between gap-5 w-full text-right" key={key}>
                        <h4 className='text-grey capitalize'>{key.split('_').join(" ")}</h4>
                        <p className="text-black-100 font-semibold">{value}</p>
              
                      </div>                
                    ))}
              </div>
              </div>   
            
                <div className="relative w-full h-90 bg-pattern bg-cover bg-center rounded-lg">
      <div className="p-10 flex justify-center items-center">
        <form onSubmit={handleSubmit} className="flex items-center justify-center flex-col">
          <div className="sm:flex  xl:justify-start gap-2 xl:items-center xl:mx-0 mx-10  mb-4">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border rounded-lg outline-none xl:px-10  xl:py-1 py-2 xl:p-0 p-5"
              placeholder="Ismingiz"

            />
          </div>
          <div className="xl:flex xl:justify-start gap-2 xl:items-center xl:mx-0 mx-10 mb-4">
          <input
            type="tel"
            value={tele}
            onChange={(e) => setTele(e.target.value)} 
            className="border rounded-lg outline-none xl:px-10  xl:py-1 py-2 xl:p-0 p-5"
            placeholder="+998 97 141-55-44"
          />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
              </Dialog.Panel>
          </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default CarDetails