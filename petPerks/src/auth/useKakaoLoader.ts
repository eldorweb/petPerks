import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk"

export default function useKakaoLoader() {
    useKakaoLoaderOrigin({
    appkey: "6ec8020798deac7ef2f8897ad1c5ccf1",
    libraries: ["clusterer", "drawing", "services"],
    })
}