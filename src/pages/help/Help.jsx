import {React} from 'react'
import HelpStyles from "./help.styles"
import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
  Input,
  Textarea,
  Button,
 
} from "@material-tailwind/react";
import { HelpContent } from './HelpContent';
import './Help.css'
import HelpStyles from './help.styles';

 
export default function Help() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
 
  return (
    <HelpStyles>
      <section className='class="md:container md:mx-auto" mx-20 my-20'>
       
      <div className='wrapper'>
        <div className='supportPage'>
        <Typography variant="paragraph" color="blue" className="mb-5 ">{HelpContent.support}</Typography>
        <Typography variant="paragraph" color="black"  className="mb-5 font-[900]">{HelpContent.HC}</Typography>    
            <p>{HelpContent.aboutProduct}</p>
            <form className="max-w-sm mt-5">
                <div className="relative">
                    <svg
                        // xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    />
                </div>
            </form>
        </div>
        <div className='question flex mt-20 mb-20 mx-10'>
        <div className='flex-1'>
        <Typography variant="paragraph" color="blue"  className=" FAQ pt-16 pl-16 mb-5 w-26" >{HelpContent.question} <br /> {HelpContent.question2}</Typography> 
        </div>
        <div className='flex-1'>
        <Fragment className='w-64'>
            <Accordion open={open === 1} animate={customAnimation}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                {HelpContent.changeProfile}
                </AccordionHeader>
                <AccordionBody>
                {HelpContent.changeProfileText}
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} animate={customAnimation}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                {HelpContent.changePassword}
                </AccordionHeader>
                <AccordionBody>
                {HelpContent.changePasswordText}
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} animate={customAnimation}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                {HelpContent.contentType}
                </AccordionHeader>
                <AccordionBody>
                {HelpContent.contentTypeText}
                </AccordionBody>
            </Accordion>  
            <Accordion open={open === 4} animate={customAnimation}>
                <AccordionHeader onClick={() => handleOpen(4)}>
                {HelpContent.reportContent}
                </AccordionHeader>
                <AccordionBody>
                {HelpContent.reportContentText}
                </AccordionBody>
            </Accordion>      
        </Fragment> 
        </div>    
        <div>   
     </div>
        </div>

        <div className=' adminMessage flex mt-20 mb-20 '>
            <div className='flex-1'>
            <Typography variant="paragraph" color="black"  className="mb-5 w-15 font-[900]" >{HelpContent.message}</Typography> 
            <Typography variant="paragraph" color="black"  className="mb-5 w-15" >{HelpContent.messageText}<br/> {HelpContent.messageText2} </Typography>
            </div>
        <div className=' '>
            <div className="w-96 items-end gap-4">
            <Input className='w-96' variant="static" label="Username" placeholder="" />
            </div>
            <div className="w-96 mt-10">
                <Textarea label="Message" />
            </div>
            <Button className='messageButton' variant="gradient">Send</Button>
            
            </div>    
        <div>   
     </div>
        </div>
     </div>
  </section>
  </HelpStyles>
    
  );
}
