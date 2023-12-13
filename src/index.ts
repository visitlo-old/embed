import { Tour } from "./types/tours";

class Visitlo {
    _apiKey: string;
    _baseUrl: string = "https://visitlo.com";

    constructor({ apiKey, baseUrl }: { apiKey: string; baseUrl?: string }) {
        this._apiKey = apiKey;
        if (baseUrl) {
            this._baseUrl = baseUrl;
        }
    }

    async callApi<T>({
        path,
        method,
        body,
    }: {
        path: string;
        method: string;
        body?: any;
    }) {
        const response = await fetch(`${this._baseUrl}/api${path}`, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this._apiKey}`,
            },
            body: JSON.stringify(body),
        });

        return response.json() as T;
    }

    async getTour({ tourId }: { tourId: string }) {
        return await this.callApi<Tour>({
            path: `/v2/tours/${tourId}`,
            method: "GET",
        });
    }

    renderTour({
        tourId,
        container,
    }: {
        tourId: string;
        container: HTMLElement;
    }) {
        const iframe = document.createElement("iframe");
        iframe.setAttribute("src", `${this._baseUrl}/embed/tour/${tourId}`);
        iframe.setAttribute("width", "100%");
        iframe.setAttribute("height", "100%");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "true");
        container.appendChild(iframe);
        // this.getTour({ tourId })
        //     .then((tour) => {
        //     })
        //     .catch((reason) => {
        //         console.error(reason);
        //     });
    }
}

if (typeof window !== "undefined") {
    (window as any).Visitlo = Visitlo;
}
