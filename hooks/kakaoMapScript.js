import Script from 'next/script';
import { useRef } from 'react';

export default function kakaoMapScript() {

    kakao.maps.load(() => {
        const { kakao } = window;

        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567),
            level: 3
        };
        
        let map = new kakao.maps.Map(container, options);

        let ps = new kakao.maps.services.Places();

        let mapInputKeyword = '누리꿈스퀘어';

        ps.keywordSearch(mapInputKeyword, placeSearchCB);


        kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
            addMarker(mouseEvent.latLng);
        });

        function placeSearchCB (data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                const bounds = new kakao.maps.LatLngBounds();
        
                for (let i=0; i<data.length; i++) {
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }
        
                map.setBounds(bounds);
            }
        }

        function addMarker(position) {

            console.log("position", position);
        
            // 마커를 생성합니다
            let marker = new kakao.maps.Marker({
                position: position
            });
        
            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);
        
            let iwContent = '<div class="text-center" style="padding:5px; padding-left: 20px;">' +
                '<a href="/mark/createForm?x=' + position.Ma +'&y=' + position.La + '" class="text-decoration-none fw-normal" style="color: black;">마크 등록하기</a>' +
                '</div>';
        
        // 인포윈도우를 생성합니다
            let infowindow = new kakao.maps.InfoWindow({
                position : position,
                content : iwContent,
                removable : true
            });
        
        // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
            infowindow.open(map, marker);
            // 생성된 마커를 배열에 추가합니다
            // markers.push(marker);
        }
    });
}
