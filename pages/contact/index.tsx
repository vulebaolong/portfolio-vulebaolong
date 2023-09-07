// components
import BulbLeft from "@/components/BulbLeft";

// icons
import { BsArrowRight, BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { Form, Input } from "antd";
import { success } from "@/helpers/message";

type FieldType = {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
};

function Contact() {
    const onFinish = (values: any) => {
        console.log("Success:", values);
        success("Đăng nhập thành công");
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <section className="h-full bg-primary/30">
            <BulbLeft />
            <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
                {/* text & form */}
                <div className="flex flex-col w-full max-w-[700px]">
                    {/* text */}
                    <motion.h2 variants={fadeIn("up", 0.2)} initial="hidden" animate="show" exit="hidden" className="h2 text-center mb-12">
                        Lets <span className="text-accent">connect.</span>
                    </motion.h2>

                    {/* form */}
                    <motion.div className="" variants={fadeIn("up", 0.4)} initial="hidden" animate="show" exit="hidden">
                        <Form
                            initialValues={{
                                name: "",
                                email: "",
                                subject: "",
                                message: "",
                            }}
                            className="w-full flex-1 flex flex-col gap-2 mx-auto"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            {/* input group */}
                            <div className="flex gap-x-6 w-full">
                                <Form.Item<FieldType> className="w-full" name="name" rules={[{ required: true, message: "Please input your name!" }]}>
                                    <Input type="text" placeholder="name" className="input text-white" />
                                </Form.Item>

                                <Form.Item<FieldType>
                                    className="w-full"
                                    name="email"
                                    rules={[
                                        { required: true, message: "Please input your email!" },
                                        {
                                            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Please enter a valid email address.",
                                        },
                                    ]}
                                >
                                    <Input type="text" placeholder="email" className="input text-white" />
                                </Form.Item>
                            </div>

                            <Form.Item<FieldType> className="w-full" name="subject" rules={[{ required: true, message: "Please input your subject!" }]}>
                                <Input type="text" placeholder="subject" className="input text-white" />
                            </Form.Item>

                            <Form.Item<FieldType> name="message" rules={[{ required: true, message: "Please input your message!" }]}>
                                <Input.TextArea rows={5} placeholder="message" className="textarea " />
                            </Form.Item>

                            <div className="flex items-stretch divide-x-[0.5px] divide-white/20 ">
                                <Form.Item className="m-0 pr-2 sm:pr-5">
                                    <button
                                        type="submit"
                                        className="btn rounded-full text-white border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                                    >
                                        <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">Lets talk</span>
                                        <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                                    </button>
                                </Form.Item>
                                {/* <div className="w-[1px] h-[52px] bg-white/30"></div> */}
                                <div className="text-white h-auto pl-2 sm:pl-5 flex items-center">
                                    <div className="h-fit">
                                        <div className="flex items-center gap-2">
                                           <span className="text-white/50"> <BsFillTelephoneFill /></span>
                                            <a href="tel:0836789578">083 6789 578</a>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <p className="text-white/50"><HiMail /></p>
                                            <a href="mailto:vulebaolong@gmail.com">vulebaolong@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
