import Document, {Html, Head , Main, NextScript} from 'next/document'
import React from "react";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html lang={this.props.locale}>
                <Head/>
                <body dir={`${this.props.locale==="en"?"ltr":"rtl"}`}>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument