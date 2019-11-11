<?php
/**
 * Created by PhpStorm.
 * User: exxxa
 * Date: 11.08.2019
 * Time: 21:49
 */

namespace App\Classes;


use RandomOrg\ClientInterface;
use RandomOrg\Random;

class CustomRandom extends Random
{
    public function __construct(ClientInterface $client = null)
    {
        $this->url = config("randomorg.apiUrl");
        $this->setApiKey(config("randomorg.apiKey"));

        parent::__construct($this->apiKey, $client);

    }

    public function getIntegers($n,$min,$max,$replacement){
       return $this->generateIntegers($n, $min, $max, $replacement)["result"];
    }
}