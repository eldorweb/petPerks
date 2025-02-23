import { useState } from "react"
import PetGroomig from "./serviceComp/petGroomig";
import DogBoard from "./serviceComp/dogBoard";
import DogTran from "./serviceComp/dogTran";
import DogEmerg from "./serviceComp/dogEmerg";
import Walking from "./serviceComp/walking";


const Service = () => {
    const [select, setSelect] = useState("PetGroomig")

    const handleSelect = (category) => {
        setSelect(category);
    }

    let service = document.querySelectorAll('.service');
    service.forEach((value) => {
        value.addEventListener('click', () => {
            service.forEach(value => {
                value.classList.remove('active')
            })
            value.classList.add('active')
        })
    })

    return (
        <div className="mr-auto ml-auto flex items-center p-[100px] pr-[300px] pl-[300px]">

            <div className="flex flex-col items-start ">
                <h2 className="w-[363px] text-black text-[55px] capitalize font-bold mb-[40px]">Our pet care services</h2>
                <div className="flex flex-col gap-[40px] w-[390px]">

                    <div className="flex items-center cursor-pointer  service active " onClick={() => handleSelect('petGroomig')}>
                        <p className="mr-auto">Pet Grooming</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <path d="M2.73437 16.9503H30.9174L24.2481 10.4669C23.7384 9.97176 24.4943 9.1837 25.0107 9.68289C25.0107 9.68286 32.6469 17.1063 32.6469 17.1063C32.8698 17.3092 32.852 17.6755 32.6469 17.8903C32.6469 17.8903 25.0107 25.3169 25.0107 25.3169C24.4968 25.81 23.7366 25.0367 24.2481 24.5328C24.2481 24.5329 30.9199 18.0441 30.9199 18.0441H2.73437C2.03551 18.0375 1.99952 16.9636 2.73437 16.9503Z" fill="black" />
                        </svg>
                    </div>

                    <div className="flex items-center cursor-pointer  service" onClick={() => handleSelect('dogBoard')}>
                        <p className="mr-auto">Dog Boarding Kennels</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <path d="M2.73437 16.9503H30.9174L24.2481 10.4669C23.7384 9.97176 24.4943 9.1837 25.0107 9.68289C25.0107 9.68286 32.6469 17.1063 32.6469 17.1063C32.8698 17.3092 32.852 17.6755 32.6469 17.8903C32.6469 17.8903 25.0107 25.3169 25.0107 25.3169C24.4968 25.81 23.7366 25.0367 24.2481 24.5328C24.2481 24.5329 30.9199 18.0441 30.9199 18.0441H2.73437C2.03551 18.0375 1.99952 16.9636 2.73437 16.9503Z" fill="black" />
                        </svg>
                    </div>

                    <div className="flex items-center cursor-pointer service" onClick={() => handleSelect('dogTran')}>
                        <p className="mr-auto">Dog Training</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <path d="M2.73437 16.9503H30.9174L24.2481 10.4669C23.7384 9.97176 24.4943 9.1837 25.0107 9.68289C25.0107 9.68286 32.6469 17.1063 32.6469 17.1063C32.8698 17.3092 32.852 17.6755 32.6469 17.8903C32.6469 17.8903 25.0107 25.3169 25.0107 25.3169C24.4968 25.81 23.7366 25.0367 24.2481 24.5328C24.2481 24.5329 30.9199 18.0441 30.9199 18.0441H2.73437C2.03551 18.0375 1.99952 16.9636 2.73437 16.9503Z" fill="black" />
                        </svg>
                    </div>

                    <div className="flex items-center cursor-pointer service" onClick={() => handleSelect('dogEmerg')}>
                        <p className="mr-auto">Dog Emergency Services</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <path d="M2.73437 16.9503H30.9174L24.2481 10.4669C23.7384 9.97176 24.4943 9.1837 25.0107 9.68289C25.0107 9.68286 32.6469 17.1063 32.6469 17.1063C32.8698 17.3092 32.852 17.6755 32.6469 17.8903C32.6469 17.8903 25.0107 25.3169 25.0107 25.3169C24.4968 25.81 23.7366 25.0367 24.2481 24.5328C24.2481 24.5329 30.9199 18.0441 30.9199 18.0441H2.73437C2.03551 18.0375 1.99952 16.9636 2.73437 16.9503Z" fill="black" />
                        </svg>
                    </div>

                    <div className="flex items-center cursor-pointer service" onClick={() => handleSelect('walking')}>
                        <p className="mr-auto">Walking and sitting</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <path d="M2.73437 16.9503H30.9174L24.2481 10.4669C23.7384 9.97176 24.4943 9.1837 25.0107 9.68289C25.0107 9.68286 32.6469 17.1063 32.6469 17.1063C32.8698 17.3092 32.852 17.6755 32.6469 17.8903C32.6469 17.8903 25.0107 25.3169 25.0107 25.3169C24.4968 25.81 23.7366 25.0367 24.2481 24.5328C24.2481 24.5329 30.9199 18.0441 30.9199 18.0441H2.73437C2.03551 18.0375 1.99952 16.9636 2.73437 16.9503Z" fill="black" />
                        </svg>
                    </div>
                </div>
            </div>
                {select === "petGroomig" && <PetGroomig />}
                {select === "dogBoard" && < DogBoard/>}
                {select === "dogTran" && <DogTran />}
                {select === "dogEmerg" && <DogEmerg />}
                {select === "walking" && <Walking />}


        </div>
    )
}

export default Service
