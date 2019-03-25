<?php

namespace Tests\Unit;

use Tests\DuskTestCase;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ExampleTest extends DuskTestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $this->assertTrue(true);

        $this->get('/')
            ->assertSee('Laravel 5')
            ->assertDontSee('Rails');
    }

    public function testBasicExample()
    {
        $this->assertTrue(true);
    }
}
