function App() {
        return (
          <div>
            <Person hobbies={['gym', 'reading', 'biking']} age={24} name="LoganT" />
            <Person hobbies={['hunting', 'fishing', 'eating']} age={12} name="Kim" />
            <Person hobbies={['cornhole', 'skiing', 'surfing']} age={67} name="MarkAnthony" />
          </div>
        );
      }
      
      ReactDOM.render(<App />, document.getElementById("root"));