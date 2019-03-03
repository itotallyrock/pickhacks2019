import { App } from 'clarifai';
import { CLARIFAI_KEY } from 'react-native-dotenv';

process.nextTick = setImmediate;

const app = new App({
    apiKey: CLARIFAI_KEY,
});

export default async function processImages(images) {
    const response = await app.predict(images, {
        minValue: .8,
    });
    return response.outputs.data.concepts;
}
