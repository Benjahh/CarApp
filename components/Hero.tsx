import Image from 'next/image';

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          {' '}
          Find, Book, or rent car - quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our efortless booking
          process.
        </p>
      </div>
    </div>
  );
};

export default Hero;
