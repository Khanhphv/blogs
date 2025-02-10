'use client'
import Card from '@/components/Card'
import StoreCard from '@/components/StoreCard'
import { VALORANT } from '@/data/constant'
import siteMetadata from '@/data/siteMetadata'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const line = (
  <svg
    width="404"
    height="34"
    viewBox="0 0 404 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex w-full justify-center"
  >
    <path
      opacity="0.2"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16 13H6L0 21H16H32H42L48 13H32H16Z"
      fill="#A7D100"
    ></path>
    <path
      opacity="0.5"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M72 13H62L56 21H72H88H98L104 13H88H72Z"
      fill="#A7D100"
    ></path>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M128 13H118L112 21H128H144H154L160 13H144H128Z"
      fill="#A7D100"
    ></path>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M260 13H250L244 21H260H276H286L292 13H276H260Z"
      fill="#A7D100"
    ></path>
    <path
      opacity="0.5"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M316 13H306L300 21H316H332H342L348 13H332H316Z"
      fill="#A7D100"
    ></path>
    <path
      opacity="0.2"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M372 13H362L356 21H372H388H398L404 13H388H372Z"
      fill="#A7D100"
    ></path>
    <path
      d="M202.012 0.67749V0.67749C204.004 8.73167 210.293 15.0203 218.347 17.0122V17.0122V17.0122C210.088 18.63 203.63 25.0875 202.012 33.3468V33.3468V33.3468C199.925 25.3467 193.678 19.0991 185.678 17.0122V17.0122V17.0122C193.887 15.3018 200.302 8.88717 202.012 0.67749V0.67749Z"
      fill="#A7D100"
    ></path>
  </svg>
)

const CarrousselComp = dynamic(() => import('@/components/carousel'), {
  ssr: false,
})

const contentArray = [
  {
    title: 'Huge Selection',
    content:
      "Explore 2024's Premier Selection of Undetected Skin Changers for Valorant, Counter-Strike 2, and more - Your Ultimate Source for Safe and Innovative Game Modifications.",
  },
  {
    title: 'Superior Quality',
    content:
      'Vsharp stands for quality. We offer top-tier game modifications, always prioritizing the safety and satisfaction of our users, to ensure a premium gaming experience with our Valorant Skin Changer and other mods.',
  },
  {
    title: 'Premier Source',
    content:
      "Since 2019, we've established ourselves as the leading provider of game modification applications, including the popular Valorant Skin Changer and Counter-Strike 2 Skin Changer. Our comprehensive selection is not just about variety; it's about delivering the highest standard of safety and security.",
  },
  {
    title: 'Vibrant Community',
    content:
      'Step into our lively community of over 4 million users that has been steadily growing since 2019. Our YouTube channel boasts over 100,000 subscribers, a testament to our engaged and enthusiastic user base. Join us and enjoy the best Valorant Skin Changer experience.',
  },
]
const gradient = {
  background: 'linear-gradient(to right, #121FCF 0%, #CF1512 100%)',
  WebkitTextFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
}
export const HomePage = () => {
  const cards = VALORANT.map((e) => {
    return {
      key: uuidv4(),
      content: <StoreCard key={uuidv4()} {...e}></StoreCard>,
    }
  })
  return (
    <>
      <div className="gap-4 lg:grid lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="text-7xl font-bold">
            Your Nr. 1{' '}
            <span
              style={{
                background:
                  'linear-gradient(to right, #121FCF 0%, #CF1512 100%)',
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
              }}
            >
              {' '}
              Mods Repository
            </span>
          </div>
          <div className="my-4 max-w-[500px] text-xl font-bold">
            Explore, download, and enjoy a seamless modding journey tailored to
            your desires!
          </div>
          <a href="/applications">
            <div className="round my-2 w-fit border-2 p-2 hover:cursor-pointer hover:bg-white hover:text-black">
              Get Started
            </div>
          </a>
          <div className="mt-4">
            <a href={siteMetadata.discord} target="_blank">
              <Image
                src="/discord-btn.webp"
                alt="discord"
                width={200}
                height={30}
              />
            </a>
          </div>
        </div>
        <div
          className="hidden sm:block"
          style={{ width: '80%', height: '500px', margin: '0 auto' }}
        >
          <CarrousselComp
            cards={cards}
            height="500px"
            width="100%"
            margin="0 auto"
            offset={2}
            showArrows={false}
          />
        </div>
      </div>
      <div className="my-[70px] w-full text-center font-bold">
        <div className="my-6 text-3xl">Featured in amazing magazines</div>
        <div className="flex w-full flex-wrap justify-between">
          {['1.webp', '2.svg', '3.svg', '4.png'].map((e, index) => (
            <Image
              key={index}
              src={`/${e}`}
              alt={''}
              width={300}
              height={200}
              style={{
                height: '50px',
              }}
            />
          ))}
        </div>
      </div>
      {line}
      <div className="my-[70px] w-full text-center font-bold">
        <div className="my-6 text-3xl">
          TRENDING <span style={gradient}>APPLICATIONS</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {VALORANT.map((e, index) => {
            return <StoreCard key={index} {...e}></StoreCard>
          })}
        </div>
      </div>
      {line}

      <div className="my-[70px] w-full text-center font-bold">
        <div className="my-6 text-3xl">
          Why Choose <span style={gradient}>{siteMetadata.brand}</span> for Your
          Game Modifications?
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {contentArray.map((e, index) => {
            return (
              <>
                <div
                  key={index}
                  className="max-w-[300px] rounded-md border-2 p-4 text-left"
                >
                  <div className="text-2xl">{e.title}</div>
                  <div className="mt-[30px] text-[14px]">{e.content}</div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}
