import TextInput from "./TextInput"

export default function SignUpSection() {
    return (
        <section id="sign_up_section">
            <div>
                <h1>Join the club and get the benefits</h1>
                <p className="bm">
                    Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
                </p>
            </div>
            <TextInput placeHolder="your@email.com" />
        </section>
    )
};
