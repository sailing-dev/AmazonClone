import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super();
        this.state = {
            items: [
                {src: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/journeys/MGY0YzMzNTMt/MGY0YzMzNTMt-MmI5NWZjZTct-w1500._CB412149503_.jpg', alt: 'Amazon'},
                {src: 'https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Movie/SYLV_2020_GWBleedingHero_1500x600_POST_Final_noLocale_PVD6240_SylviesLove._CB416257388_.jpg', alt: 'Amazon'},
                {src: 'https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-OTgzNWJkZmYt-w1500._CB412095319_.jpg'},
                {src: 'https://images-na.ssl-images-amazon.com/images/G/01/IMDbTV/gateway/WontYouBeMyNeighbor/GW_DHERO_WontYouBeMyNeighbor_1500x600_EN-US_61774_V1._CB412529384_.jpg', alt: 'Amazon'},
                {src: 'https://images-na.ssl-images-amazon.com/images/G/01/sm/Gateway/Dec2020_testing/wk3_GW1_fallguys_1500x600_EN_v2._CB413781238_.jpg'},
                {src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Evergreen/042020/US-EN_052120_FreeTier_ACQ_GW_Hero_D_1500x600_CV12._CB430645978_.jpg', alt: 'Amazon'},
                {src: 'https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-ZGEzNDUyYmUt-w1500._CB412098166_.jpg', alt: 'Amazon'},
            ],
        };
    };

	render() {
		return (
			<div>
				Home
			</div>

		);
	}
}

export default Home;
