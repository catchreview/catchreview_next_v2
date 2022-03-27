import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        

        try {
            // sheet 를 사용해 정의된 모든 스타일을 수집
            ctx.renderPage = () => 
                originalRenderPage({
                enhanceApp: App => (props) =>
                sheet.collectStyles(<App {...props} />),
            });

            // Documents 의 initial props
            const initialProps = await Document.getInitialProps(ctx);

            // props 와 styles 를 반환
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=076624d2972460e5bd173fdab6f916bb&libraries=services,clusterer,drawing"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }

}

export default MyDocument;