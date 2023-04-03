
import { interfaceVoice } from "@/interfaces/voice";
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';

const Card_voiceI=(data:interfaceVoice )=>{
    return (
        <section className='w-[95%]  gap-5 lg:gap-0 lg:w-60 lg:h-52 border-r-8 border-b-8 border-footer border-2 rounded-lg relative flex flex-col  items-center text-footer bg-fblanc'>
            <div className="p-5 m-5 h-[100%] w-[100%]">
                    <div className='flex flex-col mb-5'>
                        <p className='text-footer text-left font-beatrice'>
                            {
                                data.resume
                            }
                        </p>
                    </div>
                    <p className="font-bold  font-beatrice text-center">
                        {
                            data.auteur
                        }
                    </p>
                    
            </div>
            <FormatQuoteRoundedIcon className="absolute rotate-180 -top-5 text-4xl"/>
        </section>
    )
}


export default Card_voiceI;