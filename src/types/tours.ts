export interface Tour {
    id: string;
    name: string;
    shop: {
        id: string;
        icon: {
            url: null | string;
        };
        name: string;
        slug: string;
        email: string;
        phone: string;
        banner: {
            id: string;
            meta: {
                shop_id: string;
            };
            ready: boolean;
            shop_id: string;
            user_id: string | null;
            filename: string;
            uploaded: string;
            variants: string[];
            created_at: string;
            requiresignedurls: boolean;
        };
        address: {
            id: string;
            zip: string;
            city: string;
            state: string;
            country: string;
            shop_id: string;
            user_id: string | null;
            created_at: string;
        };
        socials: {
            url: string;
            name: string;
            label: string;
            social_type_id: string;
        }[];
        website: string;
        currency: {
            code: string;
            name: string;
            symbol: string;
            multiplier: number;
        };
        owner_id: string;
        brand_color: string | null;
        description: string;
        short_description: string;
        stripe_account_id: string | null;
    };
    slug: string;
    banner: {
        id: string;
        meta: {
            shop_id: string;
        };
        ready: boolean;
        shop_id: string;
        user_id: string | null;
        filename: string;
        uploaded: string;
        variants: string[];
        created_at: string;
        requiresignedurls: boolean;
    };
    blocks: {
        slots: {
            count: number;
            limit: number;
            price: number;
            available: number;
            person_type: string;
        }[];
        start: string;
    }[];
    images: {
        image: {
            id: string;
            meta: {
                shop_id: string;
            };
            ready: boolean;
            shop_id: string;
            user_id: string | null;
            filename: string;
            uploaded: string;
            variants: string[];
            created_at: string;
            requiresignedurls: boolean;
        };
        label: string | null;
        tour_id: string;
        image_id: string;
        created_at: string;
    }[];
    rating: number;
    videos: any[] | null;
    markers: {
        id: string;
        label: string;
        latitude: number;
        longitude: number;
    }[];
    persons: {
        limit: number;
        price: number;
        tour_id: string;
        created_at: string;
        person_type: string;
    }[];
    trailer: {
        uid: string;
        size: number | null;
        state: string;
        title: string | null;
        hls_url: string;
        shop_id: string;
        dash_url: string;
        duration: number;
        metadata: {
            shop_id: string;
            filename: string;
            filetype: string;
        };
        file_name: string;
        file_type: string;
        created_at: string;
        preview_url: string;
        thumbnail_url: string;
        ready_to_stream: boolean;
    };
    duration: number;
    latitude: number;
    longitude: number;
    description: string;
    tour_exit_url: string;
    publish_status: string;
    short_description: string;
}
