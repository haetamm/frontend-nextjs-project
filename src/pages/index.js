import Layout from '../../components/layout';
import { useState, useEffect } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      console.log(scrollTop);
      setScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Layout scrolled={scrolled} handleScroll={handleScroll}>
        
        
        <div className='container mx-auto p-3 md:p-4'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vel incidunt cum deleniti reprehenderit eligendi rerum quia iste dolorum magnam, facere, asperiores quaerat soluta aut ut veniam suscipit animi. Ex!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde cupiditate explicabo aspernatur laborum soluta dolor voluptates! Beatae sapiente, cum expedita voluptatibus fuga excepturi libero qui nesciunt illo ut eligendi commodi.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vel incidunt cum deleniti reprehenderit eligendi rerum quia iste dolorum magnam, facere, asperiores quaerat soluta aut ut veniam suscipit animi. Ex!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde cupiditate explicabo aspernatur laborum soluta dolor voluptates! Beatae sapiente, cum expedita voluptatibus fuga excepturi libero qui nesciunt illo ut eligendi commodi.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vel incidunt cum deleniti reprehenderit eligendi rerum quia iste dolorum magnam, facere, asperiores quaerat soluta aut ut veniam suscipit animi. Ex!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde cupiditate explicabo aspernatur laborum soluta dolor voluptates! Beatae sapiente, cum expedita voluptatibus fuga excepturi libero qui nesciunt illo ut eligendi commodi.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vel incidunt cum deleniti reprehenderit eligendi rerum quia iste dolorum magnam, facere, asperiores quaerat soluta aut ut veniam suscipit animi. Ex!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde cupiditate explicabo aspernatur laborum soluta dolor voluptates! Beatae sapiente, cum expedita voluptatibus fuga excepturi libero qui nesciunt illo ut eligendi commodi.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vel incidunt cum deleniti reprehenderit eligendi rerum quia iste dolorum magnam, facere, asperiores quaerat soluta aut ut veniam suscipit animi. Ex!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde cupiditate explicabo aspernatur laborum soluta dolor voluptates! Beatae sapiente, cum expedita voluptatibus fuga excepturi libero qui nesciunt illo ut eligendi commodi.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vel incidunt cum deleniti reprehenderit eligendi rerum quia iste dolorum magnam, facere, asperiores quaerat soluta aut ut veniam suscipit animi. Ex!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde cupiditate explicabo aspernatur laborum soluta dolor voluptates! Beatae sapiente, cum expedita voluptatibus fuga excepturi libero qui nesciunt illo ut eligendi commodi.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vel incidunt cum deleniti reprehenderit eligendi rerum quia iste dolorum magnam, facere, asperiores quaerat soluta aut ut veniam suscipit animi. Ex!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde cupiditate explicabo aspernatur laborum soluta dolor voluptates! Beatae sapiente, cum expedita voluptatibus fuga excepturi libero qui nesciunt illo ut eligendi commodi.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vel incidunt cum deleniti reprehenderit eligendi rerum quia iste dolorum magnam, facere, asperiores quaerat soluta aut ut veniam suscipit animi. Ex!
        Lorem ipsum do
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vel incidunt cum deleniti reprehenderit eligendi rerum quia iste dolorum magnam, facere, asperiores quaerat soluta aut ut veniam suscipit animi. Ex!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde cupiditate explicabo aspernatur laborum soluta dolor voluptates! Beatae sapiente, cum expedita voluptatibus fuga excepturi libero qui nesciunt illo ut eligendi commodi.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vel incidunt cum deleniti reprehenderit eligendi rerum quia iste dolorum magnam, facere, asperiores quaerat soluta aut ut veniam suscipit animi. Ex!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde cupiditate explicabo aspernatur laborum soluta dolor voluptates! Beatae sapiente, cum expedita voluptatibus fuga excepturi libero qui nesciunt illo ut eligendi commodi.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vel incidunt cum deleniti reprehenderit eligendi rerum quia iste dolorum magnam, facere, asperiores quaerat soluta aut ut veniam suscipit animi. Ex!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde cupiditate explicabo aspernatur laborum soluta dolor voluptates! Beatae sapiente, cum expedita voluptatibus fuga excepturi libero qui nesciunt illo ut eligendi commodi.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vel incidunt cum deleniti reprehenderit eligendi rerum quia iste dolorum magnam, facere, asperiores quaerat soluta aut ut veniam suscipit animi. Ex!
        Lorem ipsum do
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vel incidunt cum deleniti reprehenderit eligendi rerum quia iste dolorum magnam, facere, asperiores quaerat soluta aut ut veniam suscipit animi. Ex!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde cupiditate explicabo aspernatur laborum soluta dolor voluptates! Beatae sapiente, cum expedita voluptatibus fuga excepturi libero qui nesciunt illo ut eligendi commodi.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vel incidunt cum deleniti reprehenderit eligendi rerum quia iste dolorum magnam, facere, asperiores quaerat soluta aut ut veniam suscipit animi. Ex!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde cupiditate explicabo aspernatur laborum soluta dolor voluptates! Beatae sapiente, cum expedita voluptatibus fuga excepturi libero qui nesciunt illo ut eligendi commodi.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vel incidunt cum deleniti reprehenderit eligendi rerum quia iste dolorum magnam, facere, asperiores quaerat soluta aut ut veniam suscipit animi. Ex!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde cupiditate explicabo aspernatur laborum soluta dolor voluptates! Beatae sapiente, cum expedita voluptatibus fuga excepturi libero qui nesciunt illo ut eligendi commodi.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vel incidunt cum deleniti reprehenderit eligendi rerum quia iste dolorum magnam, facere, asperiores quaerat soluta aut ut veniam suscipit animi. Ex!
        Lorem ipsum do
        </div>
        
    </Layout>
  )
}
