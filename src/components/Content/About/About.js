import React, { Component } from 'react';
import lighthouse from '../../../assets/images/distant-lighthouse.jpeg';
import cake from '../../../assets/images/cake.jpeg';
import horse from '../../../assets/images/horse.jpeg';
import Aux from '../../../hoc/Aux/Aux';
import Footer from '../../Navigation/Footer/Footer';
import classes from './About.module.css';
import M from  'materialize-css/dist/js/materialize.min.js';

class About extends Component {
	componentDidMount() {
  		let parallax = document.querySelectorAll('.parallax');
  		M.Parallax.init(parallax, {});
	}

	render() {
		return (
			<div className={classes.About}>
			    <div className="parallax-container">
      				<div className="parallax"><img src={cake} />
      				</div>
    			</div>
    			<div className="section white">
     				<div className="row container">
        				<h3 className="header grey-text">Our Story</h3>
        				<p className="grey-text text-darken-3 lighten-3">Three tween boys trot up the main street of a quaint beach town. Thirteen-year-old Tommy leads the way as his adorable six-year-old sister Tawny struggles to keep up. Tommy comes across the local produce vendor... the precocious boy grabs some oranges and tosses them to his friends and Tawny. The vendor confronts him and Tommy runs out into the street - only to be struck by a car.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Ultricies integer quis auctor elit sed. Lobortis elementum nibh tellus molestie nunc non blandit. Consequat interdum varius sit amet mattis. Imperdiet proin fermentum leo vel orci. Faucibus purus in massa tempor nec. Tristique senectus et netus et malesuada fames ac turpis. Consectetur lorem donec massa sapien faucibus et molestie. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Neque sodales ut etiam sit amet nisl purus. Nunc mi ipsum faucibus vitae aliquet nec. Risus sed vulputate odio ut enim blandit. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Vivamus arcu felis bibendum ut tristique.</p>
        				<p className="grey-text text-darken-3 lighten-3">
							Lorem dolor sed viverra ipsum nunc aliquet. Laoreet sit amet cursus sit amet dictum sit. Eu consequat ac felis donec et. Diam maecenas ultricies mi eget mauris pharetra et. Dignissim diam quis enim lobortis. Feugiat nisl pretium fusce id velit. Duis ut diam quam nulla porttitor massa id. Praesent tristique magna sit amet purus gravida. Viverra tellus in hac habitasse platea. Ac felis donec et odio pellentesque.</p>
      				</div>
    			</div>
    			<div class="parallax-container">
      				<div className="parallax"><img src={horse}  />
      				</div>
    			</div>
    			<div className="section white">
     				<div className="row container">
        				<h3 className="header grey-text">About</h3>
        				<p className="grey-text text-darken-3 lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet commodo nulla facilisi nullam vehicula. Cursus mattis molestie a iaculis at erat pellentesque. Non arcu risus quis varius quam quisque id. Purus in massa tempor nec feugiat nisl pretium. Amet aliquam id diam maecenas ultricies. Dui faucibus in ornare quam viverra orci. Metus aliquam eleifend mi in nulla posuere sollicitudin. Neque egestas congue quisque egestas diam in arcu cursus. Tristique nulla aliquet enim tortor at auctor urna nunc. Est ullamcorper eget nulla facilisi etiam dignissim diam quis.</p>
        				<p className="grey-text text-darken-3 lighten-3">
						Nulla at volutpat diam ut venenatis tellus. Pharetra
						Tincidunt tortor aliquam nulla facilisi cras fermentum. Pellentesque id nih tortor id aliquet lectus proin nibh nisl. Vel pharetra vel turpis nunc eget lorem dolor sed. Risus quis varius quam quisque. Libero nunc consequat interdum varius sit amet mattis vulputate. Ac turpis egestas integer eget aliquet nibh praesent tristique. Ac turpis egestas sed tempus urna et pharetra. Nibh sit amet commodo nulla. Sit amet justo donec enim diam vulputate ut pharetra sit. Sit amet consectetur adipiscing elit duis tristique. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Neque egestas congue quisque egestas diam. Nunc sed id semper risus in hendrerit gravida rutrum. Habitant morbi tristique senectus et netus et malesuada. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Mattis vulputate enim nulla aliquet porttitor lacus luctus.</p>
						<p className="grey-text text-darken-3 lighten-3">
						Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Sed viverra tellus in hac habitasse platea. Vitae tortor condimentum lacinia quis vel. Morbi tempus iaculis urna id. Nisl vel pretium lectus quam id leo in vitae turpis. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Vitae congue eu consequat ac felis donec. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Pellentesque nec nam aliquam sem et. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Eu lobortis elementum nibh tellus molestie nunc non blandit. Nisl condimentum id venenatis a.</p>
      				</div>
    			</div>
    			<div class="parallax-container">
      				<div className="parallax"><img className={classes.LighthouseImg} src={lighthouse}  />
      				</div>
    			</div>
    			<Footer />
			</div>
		);
	}
}

export default About;