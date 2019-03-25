<?php
/**
 * Created by PhpStorm.
 * User: exxxa
 * Date: 24.03.2019
 * Time: 21:55
 */

namespace App\Providers;


class GoogleDriveAdapter extends \Hypweb\Flysystem\GoogleDrive\GoogleDriveAdapter
{
    public function getService()
    {
        return $this->service;
    }
}