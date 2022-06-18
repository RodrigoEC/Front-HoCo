import React from 'react'
import usePagesContext from '../../../contexts/app.context'
import { Wrapper } from './styles'

export const Loading = (props) => {
  const { theme } = usePagesContext()

  return (
    <Wrapper {...props} className="loading-container">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.8333 13C23.8333 14.1288 23.6665 15.2154 23.3729 16.25H21.0968C21.4598 15.2317 21.6667 14.1408 21.6667 13C21.6667 7.6245 17.2933 3.25 11.9167 3.25C10.0685 3.25 8.346 3.77433 6.87375 4.6735L8.88658 7.58333H1.30975L3.64108 0L5.64417 2.89575C7.4685 1.75933 9.60808 1.08333 11.9167 1.08333C18.4968 1.08333 23.8333 6.41875 23.8333 13ZM16.9498 21.333C15.4798 22.2278 13.7605 22.75 11.9167 22.75C6.54117 22.75 2.16667 18.3755 2.16667 13C2.16667 11.8593 2.37358 10.7683 2.73542 9.75H0.460417C0.166833 10.7846 0 11.8712 0 13C0 19.5813 5.33542 24.9167 11.9167 24.9167C14.2209 24.9167 16.3573 24.2439 18.1783 23.1108L20.1858 26L22.5171 18.4286H14.9403L16.9498 21.333Z"
          fill={theme['main-green']}
        />
      </svg>
    </Wrapper>
  )
}
