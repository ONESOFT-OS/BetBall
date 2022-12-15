import {RoutesBase} from './routes/RoutesBase';
import './styles/global.css';
import {AuthProvider} from "./contexts/Auth/AuthProvider";

export function App() {
    return (
        <AuthProvider>
            <RoutesBase/>
        </AuthProvider>

    )
}

// export default App
// function then(arg0: { new(body?: BodyInit | null | undefined, init?: ResponseInit | undefined): Response; prototype: Response; error(): Response; redirect(url: string | URL, status?: number | undefined): Response; }): string {
//   throw new Error('Function not implemented.');
// }

