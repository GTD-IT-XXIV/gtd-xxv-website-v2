const DayCardLabel = ({ className, children }) => {
  return (
    <div
      className={`relative -z-10 whitespace-nowrap text-center text-4xl
                  text-transparent sm:text-6xl md:text-7xl lg:text-8xl
                  ${className}`}
    >
      {children}
    </div>
  );
};

export default DayCardLabel;
