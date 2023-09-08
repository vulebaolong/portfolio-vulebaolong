// antd
import { Form, Input } from "antd";
import { success } from "@/helpers/message";

// icons
import { BsArrowRight, BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

type FieldType = {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
};

function FormContact() {
    const onFinish = (values: any) => {
        console.log("Success:", values);
        success("Đăng nhập thành công");
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };
    return (
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
            {/* name and email*/}
            <div className="flex gap-x-6 w-full">
                {/* name */}
                <Form.Item<FieldType> className="w-full" name="name" rules={[{ required: true, message: "Please input your name!" }]}>
                    <Input type="text" placeholder="name" className="input text-white" />
                </Form.Item>

                {/* email */}
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

            {/* subject */}
            <Form.Item<FieldType> className="w-full" name="subject" rules={[{ required: true, message: "Please input your subject!" }]}>
                <Input type="text" placeholder="subject" className="input text-white" />
            </Form.Item>

            {/* message */}
            <Form.Item<FieldType> name="message" rules={[{ required: true, message: "Please input your message!" }]}>
                <Input.TextArea rows={5} placeholder="message" className="textarea " />
            </Form.Item>

            {/* btn submit and sdt/email */}
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

                {/* sdt and email */}
                <div className="text-white h-auto pl-2 sm:pl-5 flex items-center">
                    <div className="h-fit">
                        <div className="flex items-center gap-2">
                            <span className="text-white/50">
                                {" "}
                                <BsFillTelephoneFill />
                            </span>
                            <a href="tel:0836789578">083 6789 578</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-white/50">
                                <HiMail />
                            </p>
                            <a href="mailto:vulebaolong@gmail.com">vulebaolong@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </Form>
    );
}
export default FormContact;
