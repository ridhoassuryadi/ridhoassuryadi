'use client';


export default function Error({ error }: { error: Error }) {
    return (
        <html>
            <body className='bg-blue-100'>
                <h1>Something went wrong!</h1>
                <p>{error.message}</p>
            </body>
        </html>
    );
}
