import { MemoryRouter } from 'react-router-dom' // MemoryRouter reset router per test, not BrowserRouter do
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Header from './Header'
import Router from '@router/Router'

describe('components/common/header/Header', () => {
  it('render a header component', () => {
    render(
      <MemoryRouter>
        <Header />
        <Router />
      </MemoryRouter>
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('click about link', async () => {
    render(
      <MemoryRouter>
        <Header />
        <Router />
      </MemoryRouter>
    )

    const homeLink = screen.getByText('About')
    userEvent.click(homeLink)
    expect(screen.getByText('this is about page')).toBeInTheDocument()
  })

  it('router reset test', async () => {
    render(
      <MemoryRouter>
        <Header />
        <Router />
      </MemoryRouter>
    )
    expect(screen.getByText('this is home page')).toBeInTheDocument()
  })
})
