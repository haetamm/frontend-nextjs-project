import NavComp from './NavComp';
import HeadComp from './HeadComp';
import FooterComp from './FooterComp';

const index = ({ children, scrolled, handleScroll }) => {
  return (
    <div className='bg-slate-200'>
        <HeadComp />
        <NavComp scrolled={scrolled} handleScroll={handleScroll} >
          <div className='container mx-auto'>
            {children}    
          </div>
        </NavComp>
        <FooterComp />
    </div>
  )
}

export default index
