var MyPage = React.createClass({
  getInitialState: function() {
    return {
      isOpen: false,
      items: [
        '#F1948A',
        '#D7BDE2',
        '#85C1E9',
        '#73C6B6',
      ],
      index: 0
    };
  },

  handleChange(e) {
    this.setState({index: e.activeIndex});
  },

  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='left'>
          <Ons.ToolbarButton onClick={this.show}>
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>
        <div className='center'>Side menu</div>
      </Ons.Toolbar>
    );
  },

  hide() {
    this.setState({isOpen: false});
  },

  show() {
    this.setState({isOpen: true});
  },

  render: function() {
    return (
      <Ons.Splitter>
        <Ons.SplitterSide
          style={{
              boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
          }}
          side='left'
          width={200}
          collapse={true}
          swipeable={true}
          isOpen={this.state.isOpen}
          onClose={this.hide}
          onOpen={this.show}
        >
          <Ons.Page>
            <Ons.List
              dataSource={['Profile', 'Followers', 'Settings']}
              renderRow={(title) => (
                <Ons.ListItem key={title} onClick={this.hide} tappable>{title}</Ons.ListItem>
              )}
            />
          </Ons.Page>
        </Ons.SplitterSide>
        <Ons.SplitterContent>
          <Ons.Page renderToolbar={this.renderToolbar}>
            <Ons.Carousel onPostChange={this.handleChange} index={this.state.index} fullscreen swipeable autoScroll>
          {this.state.items.map((item, index) => (
            <Ons.CarouselItem key={index} style={{backgroundColor: item}}>
              <div style={{marginTop: '50%', textAlign: 'center'}}>
                Swipe me!
              </div>
              </Ons.CarouselItem>
          ))}
        </Ons.Carousel>
            
          </Ons.Page>
        </Ons.SplitterContent>
      </Ons.Splitter>
    );
  }
});

ons.ready(function() {
  ReactDOM.render(<MyPage />, document.getElementById('app'));
});
