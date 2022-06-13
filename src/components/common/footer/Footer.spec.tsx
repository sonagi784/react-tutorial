import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('components/common/footer/Footer', () => {
  it('render a footer component', () => {
    render(<Footer />)
    const footerMessage = screen.getByText('this is footer')
    expect(footerMessage).toBeInTheDocument()
  })
})
