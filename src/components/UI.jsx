import { atom, useAtom } from 'jotai'
import { useState, useRef } from 'react'
import { AvatarCreator } from '@readyplayerme/react-avatar-creator'
import { socket } from './SocketManager'
import './buttons/switch.css'


export const buildModeAtom = atom(false)
export const shopModeAtom = atom(false)
export const draggedItemAtom = atom(null)
export const draggedItemRotationAtom = atom(0)

export const UI = () => {
  const [isBaPressed, setIsBaPressed] = useState(false)
  const [isAvPressed, setIsAvPressed] = useState(false)
  const [isDaPressed, setIsDaPressed] = useState(false)
  const [isBuPressed, setIsBuPressed] = useState(false)
  const [isShPressed, setIsShPressed] = useState(false)
  const [isRoPressed, setIsRoPressed] = useState(false)
  const [isCaPressed, setIsCaPressed] = useState(false)
  const [isRePressed, setIsRePressed] = useState(false)
  const [isFpPressed, setIsFpPressed] = useState(false)
  const [buildMode, setBuildMode] = useAtom(buildModeAtom)
  const [shopMode, setShopMode] = useAtom(shopModeAtom)
  const [draggedItem, setDraggedItem] = useAtom(draggedItemAtom)
  const [draggedItemRotation, setDraggedItemRotation] = useAtom(draggedItemRotationAtom)
  const [removeMode, setRemoveMode] = useState(false)
  const [avatarMode, setAvatarMode] = useState(false)
  const [cameraMode, setCameraMode] = useState(true)



  return (
    <>
      {avatarMode && (
        <>
          <AvatarCreator
            subdomain="renobo"
            className="fixed top-10 right-40 z-10 max-w-screen max-h-screen w-3/5 h-3/5"
            onAvatarExported={(event) => {
              socket.emit('characterAvatarUpdate', event.data.url)
              setAvatarMode(false)
            }}
          />

          <div>
            <button
              className="fixed top-4 right-4"
              onClick={() => {
                setAvatarMode(false)
              }}>
              Close
            </button>
          </div>
        </>
      )}

      <div className="fixed pointer-events-auto space-y-4 flex flex-col justify-between items-center top-40 right-8 w-24 rounded-lg max-h-screen max-w-48 h-130 pb-4 bg-[#e5e5e5] z-90">
        <div className="flex justify-evenly items-center pointer-events-auto">
          {/* BACK */}
          {(buildMode || shopMode) && draggedItem === null && (
            <button
              className={`bg-[#e5e5e5] cursor-pointer p-4 rounded-full transition-all ${isBaPressed ? 'shadow' : 'shadow-inset'}`}
              onMouseDown={() => setIsBaPressed(true)}
              onMouseUp={() => {
                setIsBaPressed(false)
                shopMode ? setShopMode(false) : setBuildMode(false)
              }}
              onMouseLeave={() => setIsBaPressed(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke={isBaPressed ? '#04d9ff7050' : '#d1d1d1'}
                className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
              </svg>
            </button>
          )}
        </div>
        {/* AVATAR */}
        <div>
          {!buildMode && !shopMode && (
            <button
              className={`bg-[#e5e5e5] cursor-pointer p-4 rounded-full transition-all ${isAvPressed ? 'shadow' : 'shadow-inset'}`}
              onMouseDown={() => setIsAvPressed(true)}
              onMouseUp={() => {
                setAvatarMode(true)
                setIsAvPressed(false)
              }}
              onMouseLeave={() => setIsAvPressed(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke={isAvPressed ? '#FFFFFF' : '#d1d1d1'}
                className="h-8 w-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
            </button>
          )}
        </div>
        {/* DANCE */}

        {!buildMode && !shopMode && (
          <button
            className={`bg-[#e5e5e5] cursor-pointer p-4 rounded-full transition-all ${isDaPressed ? 'shadow' : 'shadow-inset'}`}
            onMouseDown={() => setIsDaPressed(true)}
            onMouseUp={() => {
              setIsDaPressed(false)
              socket.emit('playerDance')
            }}
            onMouseLeave={() => setIsDaPressed(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke={isDaPressed ? '#FFFFFF' : '#d1d1d1'}
              className="h-8 w-8">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
              />
            </svg>
          </button>
        )}

        {/* BUILD */}

        {!buildMode && !shopMode && (
          <button
            className={`bg-[#e5e5e5] cursor-pointer p-4 rounded-full transition-all ${isBuPressed ? 'shadow' : 'shadow-inset'}`}
            onMouseDown={() => setIsBuPressed(true)}
            onMouseUp={() => {
              setIsBuPressed(false)
              setBuildMode(true)
            }}
            onMouseLeave={() => setIsBuPressed(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke={isBuPressed ? '#FFFFFF' : '#d1d1d1'}
              className="w-8 h-8">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
              />
            </svg>
          </button>
        )}

        {/* SHOP */}

        {buildMode && !shopMode && !removeMode && draggedItem === null && (
          <button
            className={`bg-[#e5e5e5] cursor-pointer p-4 rounded-full transition-all ${isShPressed ? 'shadow' : 'shadow-inset'}`}
            onMouseDown={() => setIsShPressed(true)}
            onMouseUp={() => {
              setIsShPressed(false)
              setShopMode(true)
            }}
            onMouseLeave={() => setIsShPressed(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke={isShPressed ? '#FFFFFF' : '#d1d1d1'}
              className="w-8 h-8">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
              />
            </svg>
          </button>
        )}

        {/* ROTATE */}

        {buildMode && !shopMode && draggedItem !== null && (
          <button
            className={`bg-[#e5e5e5] cursor-pointer p-4 rounded-full transition-all ${isRoPressed ? 'shadow' : 'shadow-inset'}`}
            onMouseDown={() => setIsRoPressed(true)}
            onMouseUp={() => {
              setIsRoPressed(false)
              setDraggedItemRotation(draggedItemRotation === 3 ? 0 : draggedItemRotation + 1)
            }}
            style={{
              position: 'fixed',
              right: `30%`,
              top: `40%`
            }}
            onMouseLeave={() => setIsRoPressed(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke={isRoPressed ? '#FFFFFF' : '#d1d1d1'}
              className="w-8 h-8">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </button>
        )}

        {/* CANCEL */}

        {buildMode && !shopMode && draggedItem !== null && (
          <>
            <span>{cameraMode}</span>
            <button
              className={`bg-[#e5e5e5] cursor-pointer p-4 rounded-full transition-all ${isCaPressed ? 'shadow' : 'shadow-inset'}`}
              onMouseDown={() => setIsCaPressed(true)}
              onMouseUp={() => {
                setIsCaPressed(false)
                setDraggedItem(null)
              }}
              onMouseLeave={() => setIsCaPressed(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke={isCaPressed ? '#FFFFFF' : '#d1d1d1'}
                className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </>
        )}

        {/* REMOVE */}

        {buildMode && !shopMode && !draggedItem !== null && (
          <button
            className={`bg-[#e5e5e5] cursor-pointer p-4 rounded-full transition-all ${isRePressed ? 'shadow' : 'shadow-inset'}`}
            onMouseDown={() => setIsRePressed(true)}
            onMouseUp={() => {
              setIsRePressed(false)
              setRemoveMode((prevRemoveMode) => !prevRemoveMode)
            }}
            onMouseLeave={() => setIsRePressed(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke={isRePressed ? '#FFFFFF' : '#d1d1d1'}
              className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        )}

        {/* FPP */}
        {!buildMode && (
          <button
            id="plc"
            className={`bg-[#e5e5e5] cursor-pointer p-4 rounded-full transition-all ${isFpPressed ? 'shadow' : 'shadow-inset'}`}
            onMouseDown={() => setIsFpPressed(true)}
            onMouseUp={() => { setCameraMode ? (false) : ( true) }}

            onMouseLeave={() => setIsFpPressed(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke={isFpPressed ? '#FFFFFF' : '#d1d1d1'}
              className="w-8 h-8">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        )}
      </div>
    </>
  )
}
