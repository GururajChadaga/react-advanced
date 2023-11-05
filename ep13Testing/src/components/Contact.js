const Contact = () => {
  return (
    <form className='flex flex-col' data-testid='contact-us-form'>
      <input
        className='w-52 border border-black border-solid mb-4'
        type='text'
        placeholder='name'
      />
      <input
        className='w-52 border border-black border-solid mb-4'
        type='text'
        placeholder='Message'
      />
      <button className='w-52 border border-black border-solid mb-4'>
        Submit
      </button>
    </form>
  );
};
export default Contact;
