import NavComp from './NavComp';
import HeadComp from './HeadComp';

const index = ({ children, scrolled, handleScroll }) => {
  return (
    <>
        <HeadComp />
        <NavComp scrolled={scrolled} handleScroll={handleScroll} >
            {children}    
        </NavComp>
        
    </>
  )
}

export default index
